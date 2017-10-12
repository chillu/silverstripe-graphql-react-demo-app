<?php
namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\Security\Member;
use MyOrg\Model\DogBreed;

class Dog extends DataObject
{
    private static $has_one = [
        'Owner' => Member::class,
        'Breed' => DogBreed::class,
        'Image' => Image::class
    ];

    private static $db = [
        'Name' => 'Varchar(255)',
    ];

    public function canView($member = null)
    {
        return true;
    }

    public function getThumbnail()
    {
        return $this->Image()->exists() ? $this->Image()->Fill(300, 300)->AbsoluteURL : null;
    }

    public function onAfterWrite()
    {
        parent::onAfterWrite();

        $this->Image()->copyVersionToStage('Stage', 'Live');
    }
}
