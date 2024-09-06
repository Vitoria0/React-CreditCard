import React from 'react';
import { Box, Button } from '@mui/material';
import banner from '../../assets/img/banner.png';
import bannerMobile from '../../assets/img/banner-mobile.png';
import video from '../../assets/img/video.png';
import footer from '../../assets/img/footer.png';
import footerMobile from '../../assets/img/footerMobile.png';
import ads from '../../assets/img/add.png';
import { Menu } from '../../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(
			'/www.serasa.com.br/premium/blog/cartao-clonado-saiba-o-que-fazer-e-como-se-proteger/dados-vazados',
		);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				height: 'auto',
				background: '#FFFFFF',
				margin: 0,
				padding: 0,
				color: '#fff',
			}}
		>
			<Menu />
			<Box
				sx={{
					width: '100%',
					paddingY: { xs: 8, sm: 7, md: 6, lg: 5, xl: 10 },
					background: '#E80070',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<Box
					component='img'
					src={bannerMobile}
					alt='banner'
					sx={{
						display: { xs: 'block', sm: 'none' },
						width: '75%',
					}}
				/>
				<Box
					component='img'
					src={banner}
					alt='banner'
					sx={{
						display: { xs: 'none', sm: 'block' },
						width: { sm: '75%', xl: '60%' },
					}}
				/>

				<Button
					onClick={handleClick}
					sx={{
						width: '20rem',
						py: '0.5rem',
						backgroundColor: '#fff',
						color: '#E80070',
						fontSize: '1.2rem',
						fontWeight: 'bold',
						borderRadius: '10px',
						textTransform: 'none',
						transition: '500ms ease',
						transform: {
							xs: 'translateX(0) translateY(0)',
							lg: ' translateX(-23vw) translateY(-3rem)',
							xl: 'translateX(-19vw) translateY(-3rem)',
						},
						'&:hover': {
							backgroundColor: '#F3F0F0',
							color: '#E60170',
							cursor: 'pointer',
						},
					}}
				>
					Ver dados vazados
				</Button>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'start',
					paddingX: { xs: 5, sm: 0, md: 20, lg: 5, xl: 0 },
					maxWidth: '1100px',
					color: '#575C70',
					fontFamily: '"Roboto", sans-serif',
				}}
			>
				<p>
					<br />
				</p>
				<p>
					Autor:<strong> Fernanda Araujo</strong>
				</p>
				<p>
					<strong>Atualizado em 20 de dezembro de 2022</strong>
				</p>
				<p>
					O cartão clonados é possível quando as informações de um cartão de crédito são roubadas e
					usadas por terceiros. Os criminosos que fazem uso indevido do crédito da vítima têm acesso
					ao número da tarjeta, nome completo do titular, data de vencimento e código de segurança.
					Apesar de a clonagem ter relação com a duplicação da tarjeta magnética no cartão físico,
					hoje o roubo dessas informações pode ocorrer por meio digital.&nbsp;&nbsp;
				</p>
				<p>
					A clonagem pode acontecer em compras online, ao clicar em link malicioso, ao preencher um
					cadastro fraudulento, ao compartilhar dados com pessoas erradas, entre outras. Este golpe
					tem se tornado bastante comum. A pesquisa Radar Febraban-Ipespe, realizada com 3.000
					pessoas em 2022, confirma o crescimento.&nbsp;&nbsp;
				</p>
				<p>
					Os resultados apontam que o percentual de pessoas vítimas de golpes ou tentativas de golpe
					aumentou. O{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://febrabantech.febraban.org.br/temas/seguranca/3-em-cada-10-brasileiros-ja-foram-vitimas-de-golpes-ou-tentativas-de-fraude?pesquisa=radar'
					>
						relatório da pesquisa
					</a>{' '}
					mostra a evolução no número de vítimas em dez pontos percentuais, passando de 21% em 2021
					para 31% em 2022. O estudo confirma: o golpe mais comum continua sendo o da clonagem de
					cartão, que atingiu 64% dos entrevistados. Subiu 16 pontos em relação a dezembro de 2021
					(48%).&nbsp;&nbsp;
				</p>
				<p>
					Mesmo que a maioria dos cartões brasileiros tenha chip, o que reduz bastante o número de
					fraudes na modalidade física, os criminosos estão mudando a estratégia. Eles deixaram de
					insistir na clonagem física por meio de leitores alterados implantados em caixa
					eletrônicos e máquinas de pagamento, para atacar online em sites ou aplicativos.&nbsp;
				</p>
				<h1 style={{ color: '#333951' }}>Onde posso ter o cartão clonado? </h1>
				<p>
					Infelizmente isso pode acontecer mais fácil e rapidamente que a gente imagina. O uso do
					cartão pressupõe o risco da clonagem, que pode acontecer tanto no uso do cartão físico
					como nas compras online. Ou seja, você pode ser clonado em qualquer lugar, veja
					exemplos:&nbsp;
				</p>
				<p>
					• <strong>Caixas eletrônicos ou compras em lojas físicas</strong>: se seu cartão não
					possui chip, é ainda mais fácil de cloná-lo, você pode ser clonado em caixas eletrônicos
					de bancos ou 24 horas. Basta um leitor adulterado para copiar a trilha magnética que
					existe atrás do cartão. Cartões com chip são mais difíceis de clonar em locais físicos.
					Mas existem casos de quadrilhas que instalaram um sistema em máquinas de pagamento. Com
					isso, era possível ler as informações do chip e copiar os dados.&nbsp;
				</p>
				<p>
					• <strong>Lojas e-commerce e </strong>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.serasa.com.br/imprensa/serasa-alerta-conheca-smishing/'
					>
						<strong>links maliciosos</strong>
					</a>
					: é possível ter seu cartão clonado em site de compras ou aplicativos com cobranças
					internas. Os criminosos roubam o seu nome completo, número do cartão, data de validade e
					código de segurança. Por isso é importante conhecer a reputação de sites, aplicativos e
					perfis de venda em mídias sociais para só negociar quando houver confiança.&nbsp;
				</p>
				<h1 style={{ color: '#333951' }}>Assista I Golpes com cartão de crédito</h1>
				<a
					href='https://youtu.be/YJjmoZ2zqCo'
					target='_blank'
					rel='noopener noreferrer'
					style={{ display: 'block', width: '100%' }}
				>
					<img
						aria-hidden='true'
						alt='Poster do Vídeo'
						src={video}
						decoding='async'
						data-nimg='responsive'
						style={{
							boxSizing: 'border-box',
							padding: 0,
							border: 'none',
							margin: 'auto',
							display: 'block',
							width: '100%',
						}}
					/>
				</a>
				<h1 style={{ color: '#333951' }}>Como proceder com o cartão clonado</h1>
				<p>
					Se ao olhar o extrato da conta ou fatura do cartão você percebeu que teve cobranças de
					gastos não identificados, é preciso agir. Porém, antes de cancelar o cartão, verifique se
					realmente houve uso do cartão por terceiros ou se você está confundindo a razão social com
					o nome fantasia da loja. Às vezes, o consumidor olha o extrato e não conhece o nome
					descrito na fatura porque é diferente do nome comercial. Também verifique se a cobrança
					não é de assinaturas de streaming, compras em aplicativos, garantia e seguro estendido com
					cobrança posterior, entre outros gastos que podem provocar engano.&nbsp;&nbsp;
				</p>
				<p>
					Se você fez toda a conferência e mesmo assim tem certeza de que não houve engano de sua
					parte, então é grande a chance da clonagem se confirmar. Saiba o que você precisa
					fazer:&nbsp;
				</p>
				<p>• O primeiro passo é pedir bloqueio ou cancelamento imediato do cartão.&nbsp;</p>
				<p>• Analisar e saber cada cobrança que você não reconhece.&nbsp;</p>
				<p>
					• Fazer um BO (
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.serasa.com.br/premium/blog/vitima-de-fraude-saiba-como-fazer-o-boletim-de-ocorrencia-online/'
					>
						boletim de ocorrência
					</a>
					), pois, se chegar qualquer protesto em seu nome, você terá mais comprovantes de não era
					você usando o cartão.&nbsp;
				</p>
				<p>
					• Entrar em contato com a emissora do cartão ou com o banco e informar sobre as
					movimentações não reconhecidas.&nbsp;
				</p>
				<p>
					Leia também I{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.serasa.com.br/premium/blog/vitima-de-fraude-saiba-como-fazer-o-boletim-de-ocorrencia-online/'
					>
						Saiba como fazer um boletim de ocorrência online
					</a>
					&nbsp;&nbsp;
				</p>
				<h1 style={{ color: '#333951' }}>Como me proteger para não ter o cartão clonado?</h1>
				<p>
					Como a principal forma de clonar cartões hoje é por meio de compras online, a dica é:
					compre de lojas nas quais você confia. Preste atenção nas orientações e coloque em prática
					imediatamente:&nbsp;&nbsp;
				</p>
				<p>
					• Pesquise a reputação do site no{' '}
					<a target='_blank' rel='noopener noreferrer' href='https://www.reclameaqui.com.br/'>
						Reclame Aqui
					</a>{' '}
					ou na própria barra de buscas do Google.&nbsp;
				</p>
				<p>• Desconfie de ofertas tentadoras demais, com preços muito abaixo do mercado.&nbsp;</p>
				<p>
					• Não compartilhe informações do cartão de crédito por ligações ou em sites de redes
					sociais, nem com amigos.&nbsp;
				</p>
				<p>
					• Use um cartão virtual para fazer as compras porque ele possui um sistema randômico do
					código de segurança, o que impede compras duplicadas. Além disso, o cancelamento dele não
					cancela o cartão físico.&nbsp;{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.serasa.com.br/ecred/blog/cartao-de-credito-virtual/'
					>
						Quer entender como o cartão virtual funciona? Confira a matéria!
					</a>
					&nbsp;
				</p>
				<p>
					<strong>Leia também I Ainda em dúvida? </strong>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.serasa.com.br/premium/blog/3-sinais-de-que-voce-teve-seu-cartao-clonado/'
					>
						<strong>3 sinais de que você teve seu cartão clonado</strong>
					</a>
					<strong>&nbsp;</strong>&nbsp;
				</p>
				<h1 style={{ color: '#333951' }}>Monitore o CPF e controle melhor a sua vida financeira </h1>
				<p>
					Para ficar no controle da sua vida financeira, é importante acompanhar seus dados
					pessoais. Você pode fazer isso com o Serasa Premium, serviço de assinatura da Serasa, que
					permite o monitoramento 24 horas por dia tudo que acontece com seu CPF e CNPJ, como
					consultas, Score, negativações e muito mais.&nbsp;&nbsp;&nbsp;
				</p>
				<p>
					Só com a conta Premium, você tem atendimento exclusivo na Serasa e controla se seu Score
					pode ou não ser consultado pelo mercado. O Premium também avisa sempre que:&nbsp;
				</p>
				<p>• seu CPF e CNPJ for consultado;&nbsp;&nbsp;</p>
				<p>• seu Serasa Score variar;&nbsp;&nbsp;</p>
				<p>• seus dados vazarem na Dark Web.&nbsp;&nbsp;</p>
			</Box>
			<hr style={{ height: '2px', background: 'gray', width: '100%', margin: ' 5rem 0 2rem  0' }} />
			<img src={ads} alt='ads' style={{ width: '50%' }} />

			<hr style={{ height: '2px', background: 'gray', width: '100%', margin: ' 2rem 0 5rem 0' }} />

			<Box
				component='img'
				src={footerMobile}
				alt='footerMobile'
				sx={{
					display: { xs: 'block', sm: 'none' },
					width: '100%',
					borderTop: 'solid 3px #E80070',
				}}
			/>
			<Box
				component='img'
				src={footer}
				alt='footer'
				sx={{
					display: { xs: 'none', sm: 'block' },
					width: '100%',
				}}
			/>
		</Box>
	);
};

export default HomePage;
