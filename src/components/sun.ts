import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSunElement } from '@aracna/icons-feather-web/elements/sun-element'

export const IconFeatherSun: ElementComponent<IconFeatherSunElement, IconProps> = createBaseElementComponent<
  IconFeatherSunElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sun', IconFeatherSunElement)
