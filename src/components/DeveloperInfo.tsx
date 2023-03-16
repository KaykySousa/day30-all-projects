export default function DeveloperInfo() {
	return (
		<div className="fixed right-4 bottom-4 flex gap-x-4">
			<a
				href="https://github.com/KaykySousa"
				className="hover:scale-125 transition-transform"
			>
				<img src="/logo-github.svg" alt="Github" className="h-6 w-6" />
			</a>
			<a
				href="https://www.linkedin.com/in/kayky-de-sousa/"
				className="hover:scale-125 transition-transform"
			>
				<img
					src="/logo-linkedin.svg"
					alt="Linkedin"
					className="h-6 w-6"
				/>
			</a>
		</div>
	)
}
