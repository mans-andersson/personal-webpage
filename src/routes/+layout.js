export const prerender = true;
import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_rww4xKEuO0H4WNXIaIs5PSd4qGqwFFYuzDQ6J9FyoUi',
      { api_host: 'https://eu.i.posthog.com' }
    )
  }
  return
};