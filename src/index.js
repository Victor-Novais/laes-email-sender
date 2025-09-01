require("dotenv").config();
const nodemailer = require("nodemailer");
const emailTemplate = require("./emailTemplate");

async function enviarEmail(destinatario, nome) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        let info = await transporter.sendMail({
            from: `"LAES" <${process.env.EMAIL_USER}>`,
            to: destinatario,
            subject: "Aprovação - Etapa de Entrevista",
            html: emailTemplate(nome),
        });

        console.log(`E-mail enviado para ${destinatario}: ${info.messageId}`);
    } catch (error) {
        console.error(`Erro ao enviar e-mail para ${destinatario}:`, error);
    }
}


const candidatos = [
    { email: "victornovais1337@gmail.com", nome: "Novais" },
    { email: "isadora.pereira@ucsal.edu.br", nome: "Isa" },

];


async function enviarParaTodos() {
    for (const candidato of candidatos) {
        await enviarEmail(candidato.email, candidato.nome);
    }
}

enviarParaTodos();
