<?php

namespace MyOrg\Extension;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Security\Member;
use MyOrg\Model\Dog;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;

class DogOwner extends DataExtension
{

    private static $has_many = [
        'Dogs' => Dog::class
    ];

    private static $many_many = [
        'Friends' => Member::class
    ];

    public function updateCMSFields(FieldList $fields)
    {
    	$dogField = GridField::create('Dogs')
            ->setList($this->owner->Dogs())
            ->setConfig(GridFieldConfig_RelationEditor::create());
        $fields->addFieldToTab('Root.Dogs', $dogField);

        $friendField = GridField::create('Friends')
            ->setList($this->owner->Friends())
            ->setConfig(GridFieldConfig_RelationEditor::create());
        $fields->addFieldToTab('Root.Friends', $friendField);
    }
}
