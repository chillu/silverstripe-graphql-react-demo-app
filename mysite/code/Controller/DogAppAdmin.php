<?php
namespace MyOrg\Controller;

use MyOrg\Model\Dog;
use MyOrg\Model\DogBreed;
use SilverStripe\Admin\ModelAdmin;

class DogAppAdmin extends ModelAdmin
{
    private static $managed_models = [
        Dog::class,
        DogBreed::class
    ];

    private static $url_segment = 'dogapp';

    private static $menu_title = 'Dog App';
}
