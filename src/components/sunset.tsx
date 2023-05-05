import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSunsetElement } from '@aracna/icons-feather-web/elements/sunset-element.js'

export const IconFeatherSunset: ElementComponent<IconFeatherSunsetElement, IconProps> = createBaseElementComponent<
  IconFeatherSunsetElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sunset', IconFeatherSunsetElement)
