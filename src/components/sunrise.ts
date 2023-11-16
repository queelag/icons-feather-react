import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSunriseElement } from '@aracna/icons-feather-web/elements/sunrise-element'

export const IconFeatherSunrise: ElementComponent<IconFeatherSunriseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunriseElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sunrise', IconFeatherSunriseElement)
