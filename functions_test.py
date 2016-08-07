import mock

import unittest

from optimizely_platform import exceptions
from optimizely_platform import objects

import functions


class FunctionsTest(unittest.TestCase):

  def test_get_dynamic_audience_conditions__successful_fetch(self):
    SAMPLE_APP_SETTINGS = {
      'api_key': 'test123'
    }

    audience_conditions = functions.get_dynamic_audience_conditions(SAMPLE_APP_SETTINGS)
    self.assertItemsEqual([], audience_conditions)
