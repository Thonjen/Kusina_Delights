<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $applicationData;

    public function __construct($applicationData)
    {
        $this->applicationData = $applicationData;
    }

    public function build()
    {
        $mail = $this->subject('New Chef Application')
            ->html("
                <h1>New Chef Application</h1>
                <p><strong>From:</strong> {$this->applicationData['user_name']}</p>
                <p><strong>Email:</strong> {$this->applicationData['user_email']}</p>
                <p><strong>User ID:</strong> {$this->applicationData['user_id']}</p>
                <p><strong>Message:</strong></p>
                <p>{$this->applicationData['message']}</p>
                <p>Please check the attached files for more information.</p>
            ");

        // Attach files if any
        if (isset($this->applicationData['files']) && !empty($this->applicationData['files'])) {
            foreach ($this->applicationData['files'] as $file) {
                $mail->attach($file->getRealPath(), [
                    'as' => $file->getClientOriginalName(),
                    'mime' => $file->getMimeType(),
                ]);
            }
        }

        return $mail;
    }
}
