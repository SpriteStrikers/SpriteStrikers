import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

console.log("🚀 Ko-fi Webhook v2 - INICIANDO")

serve(async (req) => {
  try {
    // 1. Log de entrada
    console.log(`📥 Método recibido: ${req.method}`)

    // 2. Extraer Payload
    const formData = await req.formData()
    const dataString = formData.get('data')

    if (!dataString) {
      console.error("❌ ERROR: No se encontró el campo 'data' en el form-data")
      return new Response('Missing data field', { status: 400 })
    }

    const payload = JSON.parse(dataString.toString())

    const verificationToken = Deno.env.get('KOFI_TOKEN')
    if (verificationToken && payload.verification_token !== verificationToken) {
      return new Response('Invalid token', { status: 403 })
    }
    
    // LOG IMPORTANTE: Ver qué estamos recibiendo y qué monto detectamos
    const amountStr = payload.amount || "0"
    const amountVal = parseFloat(amountStr)
    console.log(`✅ Payload parseado. Monto string: "${amountStr}" -> Numerico: ${amountVal}`)

    // 3. Conexión a Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    
    // Check rápido de variables (sin imprimir la llave completa por seguridad)
    if (!supabaseUrl || !supabaseKey) {
        console.error("❌ ERROR CRÍTICO: Faltan variables de entorno SUPABASE_URL o SERVICE_KEY")
        return new Response('Server Config Error', { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // 4. Ejecutar el SQL Blindado
    console.log("⚡ Ejecutando RPC 'increment_kofi_stats'...")
    
    const { error } = await supabase.rpc('increment_kofi_stats', { 
        amount_donated: amountVal 
    })

    if (error) {
        console.error("🔥 ERROR SQL:", error)
        return new Response(JSON.stringify(error), { status: 500 })
    }

    console.log("🎉 ÉXITO TOTAL: Base de datos actualizada.")
    return new Response('OK', { status: 200 })

  } catch (err) {
    console.error("💀 ERROR NO CONTROLADO:", err)
    return new Response(JSON.stringify(err), { status: 500 })
  }
})