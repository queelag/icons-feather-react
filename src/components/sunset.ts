import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSunsetElement } from '@aracna/icons-feather-web/elements/sunset-element'

export const IconFeatherSunset: ElementComponent<IconFeatherSunsetElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunsetElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sunset', IconFeatherSunsetElement)
