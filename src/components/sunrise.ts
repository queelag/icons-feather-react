import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSunriseElement } from '@aracna/icons-feather-web/elements/sunrise-element'

export const IconFeatherSunrise: ElementComponent<IconFeatherSunriseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunriseElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sunrise', IconFeatherSunriseElement)
