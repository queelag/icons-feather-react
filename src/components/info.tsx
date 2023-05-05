import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInfoElement } from '@aracna/icons-feather-web/elements/info-element.js'

export const IconFeatherInfo: ElementComponent<IconFeatherInfoElement, IconProps> = createBaseElementComponent<
  IconFeatherInfoElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-info', IconFeatherInfoElement)
