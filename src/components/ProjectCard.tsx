interface ProjectCardProps {
	projectUrl: string
	title: string
	imageUrl: string
}

export default function ProjectCard({
	imageUrl,
	projectUrl,
	title,
}: ProjectCardProps) {
	return (
		<a
			href={projectUrl}
			className="w-full flex flex-col items-center border border-black rounded-md transition-transform bg-white hover:scale-105 min-[512px]:w-80"
		>
			<div className="w-full min-[512px]:h-80 border-b border-black p-4">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-contain rounded-t-md"
				/>
			</div>

			<p className="p-4 flex-1 flex justify-center items-center text-xl font-semibold w-full text-center">
				{title}
			</p>
		</a>
	)
}
