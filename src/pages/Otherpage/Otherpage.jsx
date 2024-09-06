import React, { useState } from 'react';
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	TextField,
	Typography,
	CircularProgress,
} from '@mui/material';
import { Menu } from '../../components/Menu/Menu';
import frente from '../../assets/img/Frente.png';
import verso from '../../assets/img/Verso.png';

const OtherPage = () => {
	const [formValues, setFormValues] = useState({
		cardHolderName: '',
		cardNumber: '',
		expirationDate: '',
		cvv: '',
	});
	const [openModal, setOpenModal] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = event => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setLoading(true); // Start loading

		// Simulate form submission
		setTimeout(() => {
			setLoading(false); // End loading
			setOpenModal(true);
		}, 3000);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'start',
				width: '100%',
				height: 'auto',
				background: '#FFFFFF',
				margin: 0,
				padding: 0,
				color: '#fff',
				fontFamily: '"Roboto", sans-serif',
			}}
		>
			<Box
				sx={{
					width: '30vw',
					height: '100vh',
					background: '#A51455',
					display: { xs: 'none', md: 'flex' },
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					position: 'absolute',
					zIndex: 0,
				}}
			></Box>
			<Menu />
			<Box
				sx={{
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: { xs: 'column-reverse', md: 'row' },
					alignItems: 'center',
					position: 'relative',
					zIndex: 1,
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: { xs: 'auto', md: '100vh' },
						paddingTop: 10,
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							width: { xs: '90%', md: '50%' },
							transform: { xs: 0, lg: 'translateX(20rem)' },
							position: 'relative',
						}}
					>
						<p style={{ position: 'absolute', bottom: 5, left: 20 }}>
							{formValues.cardHolderName}
						</p>
						<h3 style={{ position: 'absolute', top: '50%', left: 20 }}>
							{formValues.cardNumber}
						</h3>
						<p style={{ position: 'absolute', bottom: 50, left: 20 }}>
							{formValues.expirationDate}
						</p>
						<img src={frente} alt='' style={{ width: '100%', height: 'auto' }} />
					</Box>
					<Box sx={{ width: { xs: '90%', md: '50%' }, marginLeft: 5, position: 'relative' }}>
						<h3 style={{ position: 'absolute', top: '42%', left: '50%', color: '#000' }}>
							{formValues.cvv}
						</h3>
						<img src={verso} alt='' style={{ width: '100%', height: 'auto' }} />
					</Box>
				</Box>
				<Box
					sx={{
						width: { xs: '100%', md: '70%', xl: '80%' },
						height: { xs: 'auto', md: '100vh' },
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						paddingTop: { xs: 1, md: 0 },
						paddingX: { xs: 2, md: 0 },
						alignItems: 'start',
						fontFamily: '"Roboto", sans-serif',
						color: '#A51455',
						marginRight: 3,
					}}
				>
					<Typography
						variant='h2'
						fontWeight={400}
						sx={{ marginBottom: { xs: 4, xl: 5 }, margin: 1, lineHeight: '100%' }}
					>
						Veja se seu cartão
						<br /> vazou na internet
					</Typography>
					<Container>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={{ xs: 1, xl: 3 }}>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label='Nome do Titular'
										name='cardHolderName'
										value={formValues.cardHolderName}
										onChange={handleChange}
										required
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label='Número do Cartão'
										name='cardNumber'
										value={formValues.cardNumber}
										onChange={handleChange}
										required
										inputProps={{ maxLength: 19 }}
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										label='Data de Expiração'
										name='expirationDate'
										value={formValues.expirationDate}
										onChange={handleChange}
										required
										placeholder='MM/AA'
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										label='CVV'
										name='cvv'
										value={formValues.cvv}
										onChange={handleChange}
										required
										type='password'
										inputProps={{ maxLength: 4 }}
										sx={{ background: '#fff' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='h6'
										fontWeight={400}
										sx={{ marginBottom: 5 }}
									>
										Cuidado! Nunca passe a senha do seu cartão em nenhum lugar
										na internet.
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Button
										type='submit'
										variant='contained'
										color='primary'
										fullWidth
										sx={{
											py: { xs: 1, xl: 2 },
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										disabled={loading} // Disable button while loading
									>
										{loading ? <CircularProgress size={24} /> : 'Verificar'}
									</Button>
								</Grid>
							</Grid>
						</form>
					</Container>
				</Box>
			</Box>

			{/* Modal for showing the confirmation message */}
			<Dialog open={openModal} onClose={handleCloseModal} sx={{ zIndex: 999999 }}>
				<DialogTitle
					sx={{ width: '500px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}
				>
					Tudo seguro!
				</DialogTitle>
				<DialogContent
					sx={{
						width: '500px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Typography variant='body1' textAlign={'center'}>
						{formValues.cardHolderName}, seu cartão foi verificado! Pode ficar tranquilo que seu
						cartão não vazou na internet!
					</Typography>
					<a href='https://www.serasa.com.br/' style={{ width: '100%' }}>
						<Button
							onClick={handleCloseModal}
							variant='contained'
							color='primary'
							sx={{ marginTop: 2, width: '100%' }}
						>
							Fechar
						</Button>
					</a>
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default OtherPage;
