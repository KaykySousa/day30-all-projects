import DeveloperInfo from "./components/DeveloperInfo"
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"

export default function App() {
	return (
		<div className="min-h-screen w-full bg-neutral-50 flex flex-col items-center px-4 py-12">
			<div className="text-center">
				<h1 className="text-4xl font-semibold">
					30 Projects in 30 Days
				</h1>
				<p className="mt-3">2023-02-14 - 2023-03-15</p>
				<p className="text-xl mt-3">Developed by: Kayky de Sousa</p>
			</div>
			<div className="mt-12 flex w-full max-w-5xl flex-wrap gap-6 justify-center">
				{projects.map(({ imageUrl, projectUrl, title }, index) => (
					<ProjectCard
						key={index}
						imageUrl={imageUrl}
						projectUrl={projectUrl}
						title={title}
					/>
				))}
			</div>
			<DeveloperInfo />
		</div>
	)
}
