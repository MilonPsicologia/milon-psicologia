import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Configura la API key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, apellidos, email, telefono, asunto, mensaje } = body

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Nombre, email y mensaje son campos obligatorios" }, { status: 400 })
    }

    // Configurar el mensaje
    const msg = {
      to: "milonpsicologia@gmail.com",
      from: "milonpsicologia@gmail.com", // Debe ser un remitente verificado en SendGrid
      subject: `Formulario de contacto: ${asunto || "Consulta desde la web"}`,
      text: `
        Nombre: ${nombre} ${apellidos || ""}
        Email: ${email}
        Teléfono: ${telefono || "No proporcionado"}
        
        Mensaje:
        ${mensaje}
      `,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellidos || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
        <p><strong>Asunto:</strong> ${asunto || "No especificado"}</p>
        <h3>Mensaje:</h3>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Enviar el email
    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde." },
      { status: 500 },
    )
  }
}
