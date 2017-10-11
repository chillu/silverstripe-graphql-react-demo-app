<?php
namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;
use MyOrg\Model\DogBreed;

class Dog extends DataObject
{
    private static $has_one = [
        'Owner' => Member::class,
        'Breed' => DogBreed::class
    ];

    private static $db = [
        'Name' => 'Varchar(255)',
    ];

    public function canView($member = null)
    {
        return true;
    }
}
