import { AboutMe as AboutComponent } from "./style"
import { Text } from "@/styles/Text";
import { Box } from "@/styles/Global";
export const AboutMe = () => {
	return <AboutComponent>
		<Box css={{ marginTop: "$3" }}>
            <Text type="heading2" color="grey5" css={{ marginBottom: "$2", marginLeft: "$1" }}>
              Sobre Mim
            </Text>
			<section>
            <Text type="body1" color="grey2">
				Sou um desenvolvedor Front End experiente, com amplo domínio em JavaScript, TypeScript, React, HTML, CSS e Git. Minha experiência também abrange o Back End, onde trabalho com tecnologias como Python, Node.js, Express, PostgreSQL, typeORM, Django/Django Restframework e diversos bancos de dados.
            </Text>
			<Box css={{ marginTop: "$1" }}>
			<Text type="body1" color="grey2">
				Além disso, sou familiarizado com metodologias ágeis, como Scrum e Kanban, o que me permite trabalhar de forma eficiente em projetos ágeis. Tenho conhecimentos sólidos em Vue.js, Stiches, Redux, Prisma e TDD com Jest, o que me capacita a utilizar ferramentas modernas e boas práticas de desenvolvimento.
			</Text>
			</Box>
			<Box css={{ marginTop: "$1" }}>
			<Text type="body1" color="grey2">
				Minha paixão pela tecnologia impulsiona meu desejo contínuo de enfrentar novos desafios e aprender constantemente. Estou entusiasmado para colaborar em projetos inovadores e alcançar resultados extraordinários através de soluções criativas e de alta qualidade. Vamos trabalhar juntos para atingir o sucesso em nossos empreendimentos tecnológicos!
			</Text>
			</Box>
			</section>
          </Box>
	</AboutComponent>
}