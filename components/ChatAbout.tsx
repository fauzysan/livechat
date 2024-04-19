import React from "react";

export default function ChatAbout() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="text-center space-y-5">
				<h1 className="text-3xl font-bold">Selamat Datang di Live Chat</h1>
				<p className="w-96">
					Aplikasi ini dibuat menggunakan supabase realtime db. login dengan github untuk kirim pesan!!
				</p>
				<p>dibuat oleh <a href="https://instagram.com/fauzyhafidz" target="_blank">fauzyhafidz</a></p>
			</div>
		</div>
	);
}
