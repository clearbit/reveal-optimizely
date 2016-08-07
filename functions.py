import requests

from optimizely_platform import exceptions
from optimizely_platform import objects


def get_dynamic_audience_conditions(integration_settings):
  return []

def validate_integration_settings(integration_settings):
  try:
    verify_account(integration_settings['api_key'])
  except:
    raise exceptions.IntegrationSettingsValidationError(
        'Your Clearbit API Key appears to be invalid.')

def verify_account(api_key):
  VERIFY_ACCOUNT_ENDPOINT = 'https://clearbit.com/api/v1/account'

  headers = {'Authorization': 'Bearer ' + api_key}

  return requests.get(VERIFY_ACCOUNT_ENDPOINT, headers=headers).json()
