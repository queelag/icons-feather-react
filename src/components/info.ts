import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInfoElement } from '@aracna/icons-feather-web/elements/info-element'

export const IconFeatherInfo: ElementComponent<IconFeatherInfoElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInfoElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-info', IconFeatherInfoElement)
