import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSunElement } from '@aracna/icons-feather-web/elements/sun-element'

export const IconFeatherSun: ElementComponent<IconFeatherSunElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSunElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sun', IconFeatherSunElement)
