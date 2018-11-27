<?php

namespace App\Notifications;

use App\Data\Models\Invitation;
use App\Data\Repositories\Invitations;

class SendInvitation extends Notification
{
    protected $invitation;

    /**
     * Create a new notification instance.
     *
     * @param $invitationId
     */
    public function __construct($invitationId)
    {
        $this->invitation = app(Invitations::class)
            ->setCurrentClientId($invitationId)
            ->findById($invitationId);
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  Invitation $invitation
     *
     * @return \App\Mail\Invitation
     */
    public function toMail($invitation)
    {
        return new \App\Mail\Invitation($invitation);
    }
}
