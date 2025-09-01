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
    { email: "olucca104@gmail.com", nome: "Enzo Oliveira" },
    { email: "vmachakcabral@gmail.com", nome: "Vinicius Machak" },
    { email: "felipelobo.santana@ucsal.edu.br", nome: "Felipe Lobo" },
    { email: "bernardo.garcia@ucsal.edu.br", nome: "Bernardo Barbosa" },
    { email: "dev.leonardocdejesus@gmail.com", nome: "Leonardo Cruz" },
    { email: "emilly.m.limma@gmail.com", nome: "Emilly Araújo " },
    { email: "rian.novais@ucsal.edu.br", nome: "Rian Novais" },
    { email: "caiqueramos.silva@ucsal.edu.br", nome: "Caique Ramos" },
    { email: "joaojeronim7@gmail.com", nome: "joao jeronimo bonfim " },
    { email: "guilhermeneiva.dev@gmail.com", nome: "Guilherme Neiva" },
    { email: "danielcampos.santos@ucsal.edu.br", nome: "Daniel Campos" },
    { email: "eduardopecanha.santos@ucsal.edu.br", nome: "Eduardo Peçanha" },
    { email: "maria.eulalio@ucsal.com.br", nome: "Maria Luiza Borges" },
    { email: "brunocmg2006@gmail.com", nome: "Bruno Cruz" },
    { email: "rian.bene14@gmail.com", nome: "Rian Martins" },
    { email: "kaua.seixas@ucsal.edu.br", nome: "Kauã Seixas" },
    { email: "thiago.lima@ucsal.edu.br", nome: "Thiago Henrique Benedictis" },
    { email: "raniel.santos@ucsal.edu.br", nome: "Raniel Lopes" },
    { email: "paulooo.cm@gmail.com", nome: "Paulo" },

];


async function enviarParaTodos() {
    for (const candidato of candidatos) {
        await enviarEmail(candidato.email, candidato.nome);
    }
}

enviarParaTodos();
