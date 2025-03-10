import { useRef, useState } from 'react';

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = () => {};

	const handleSubmit = () => {};

	return (
		<section className='c-space my-20'>
			<div className='relative min-h-screen flex items-center justify-center flex-col'>
				<img
					src='/assets/terminal.png'
					alt='terminal background'
					className='absolute inset-0 min-h-screen hidden xl:block'
				/>
				<div className='contact-container xl:p-20'>
					<h3 className='head-text'>Let's talk</h3>
					<p className='text-lg text-white-600 mt-3'>
						Wheter you're looking to build a new website, improve your existing
						platform, or bring a unique project to life, I'm here to help.
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col space-y-7'
					>
						<label className='space-y-3'>
							<span className='field-label'>Full Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='Damian Desmond'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								required
								className='field-input'
								placeholder='damiandesmond@wmail.com'
							/>
						</label>
						<label className='space-y-3'>
							<span className='field-label'>Your Message</span>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className='field-input'
								placeholder="Hi, I'm interested in..."
							/>
						</label>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
