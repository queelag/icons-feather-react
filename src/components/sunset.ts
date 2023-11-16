import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSunsetElement } from '@aracna/icons-feather-web/elements/sunset-element'

export const IconFeatherSunset: ElementComponent<IconFeatherSunsetElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunsetElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sunset', IconFeatherSunsetElement)
