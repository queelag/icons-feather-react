import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWindElement } from '@aracna/icons-feather-web/elements/wind-element'

export const IconFeatherWind: ElementComponent<IconFeatherWindElement, IconProps> = createBaseElementComponent<
  IconFeatherWindElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wind', IconFeatherWindElement)
