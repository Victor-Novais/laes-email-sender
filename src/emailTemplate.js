module.exports = (nome) => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processo Seletivo LAES - Etapa de Entrevista</title>
    <style>
        
        body {
            background-color: #0b1530;
            color: #e0e0e0;
        }
        .container {
            background-color: #04142c;
            color: #e0e0e0;
        }
        h1, h2 {
            color: #ffffff;
        }

     
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #0b1530 !important;
                color: #e0e0e0 !important;
            }
            .container {
                background-color: #04142c !important;
                color: #e0e0e0 !important;
            }
            h1, h2 {
                color: #ffffff !important;
            }
            p {
                color: #e0e0e0 !important;
            }
        }
    </style>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td align="center" style="padding: 20px 10px;">
                
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="container" style="max-width: 600px; margin: 0; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
                    
                    <tr>
                        <td style="text-align: left; padding-bottom: 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
                                <tr>
                                    <td style="padding-right: 15px; vertical-align: middle; width: 130px;">
                                        <img src="https://lh3.googleusercontent.com/d/1hdxR484Pvx17kwhOgLZp6VxM3xK59Fmf" alt="Logo LAES" width="130" style="display: block; border: 0; max-width: 130px; height: auto;">
                                    </td>
                                    <td style="vertical-align: middle; width: calc(100% - 130px);">
                                        <h1 style="font-size: 20px; margin: 0; font-weight: bold;">Liga Acadêmica de Engenharia de Software</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top: 20px; padding-bottom: 20px; line-height: 1.8;">
                            <h2 style="margin-bottom: 15px; font-weight: bold;">Prezado(a) ${nome},</h2>
                            <p style="margin-top: 0; margin-bottom: 15px;">É com satisfação que informamos que você foi aprovado(a) para a próxima fase do processo seletivo da
                                <strong>Liga Acadêmica de Engenharia de Software (LAES)</strong>. A próxima etapa consiste em uma
                                entrevista individual.
                            </p>
                            <p style="margin-top: 0; margin-bottom: 15px;">Em breve, nossos recrutadores entrarão em contato com você por e-mail para agendar o melhor horário.
                                Fique atento(a) à sua caixa de entrada para não perder nenhuma comunicação importante.</p>
                            <p style="margin-top: 0; margin-bottom: 15px;">Agradecemos imensamente seu interesse em fazer parte de nossa liga e desejamos boa sorte nesta fase!</p>
                            <p style="margin-top: 25px; margin-bottom: 5px;">Atenciosamente,</p>
                            <p style="margin-bottom: 0;"><strong>Presidente da LAES</strong></p>
                            <p style="margin-top: 0;">Liga Acadêmica de Engenharia de Software – LAES</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align: center; font-size: 0.8em; color: #a0a0a0; padding-top: 15px; border-top: 1px solid #1a2a47;">
                            <p style="margin-bottom: 5px;">Este é um e-mail automático. Por favor, não responda diretamente a esta mensagem.</p>
                            <p style="margin-top: 5px;">© 2025 Liga Acadêmica de Engenharia de Software - Todos os direitos reservados.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>
`;

