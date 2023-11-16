import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWindElement } from '@aracna/icons-feather-web/elements/wind-element'

export const IconFeatherWind: ElementComponent<IconFeatherWindElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWindElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-wind', IconFeatherWindElement)
