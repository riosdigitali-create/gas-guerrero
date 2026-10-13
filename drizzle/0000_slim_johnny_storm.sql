CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`location` text,
	`service` text NOT NULL,
	`quantity` text NOT NULL,
	`date` text NOT NULL,
	`slot` text NOT NULL,
	`status` text DEFAULT 'Por confirmar' NOT NULL,
	`created_at` text NOT NULL
);
