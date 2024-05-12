export const Loading = () => {
	return (
		<>
			<div className="flex flex-col items-center mt-10 mb-10">
				<div className="text-5xl font-semibold mb-3 text-white">
					Redirected
				</div>
				<div className="opacity-50 mb-8">
					please wait...
				</div>
				<div className="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-pink-500 border-t-transparent shadow-md"></div>
			</div>
		</>
	)
}


