<?php
namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Security\Member;
use MyOrg\Model\DogBreed;

class Dog extends DataObject
{
    private static $db = [
        'Name' => 'Varchar(255)',
    ];

    private static $has_one = [
        'Owner' => Member::class,
        'Breed' => DogBreed::class,
        'Image' => Image::class
    ];

    public function getThumbnail()
    {
        return $this->Image()->exists() ? $this->Image()->Fill(300, 300)->AbsoluteURL : null;
    }

    public function canView($member = null)
    {
        return true;
    }

    public function onAfterWrite()
    {
        parent::onAfterWrite();

        $this->Image()->copyVersionToStage('Stage', 'Live');
    }
}
