import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherInfoElement } from '@aracna/icons-feather-web/elements/info-element'

export const IconFeatherInfo: ElementComponent<IconFeatherInfoElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInfoElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-info', IconFeatherInfoElement)
