import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSunElement } from '@aracna/icons-feather-web/elements/sun-element'

export const IconFeatherSun: ElementComponent<IconFeatherSunElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sun', IconFeatherSunElement)
