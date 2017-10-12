<?php
namespace MyOrg\Controller;

use SilverStripe\Control\Controller;

/**
 * Deny root access (running headless)
 */
class RootController extends Controller
{
    public function index($request)
    {
      return $this->httpError(401);
    }
}
