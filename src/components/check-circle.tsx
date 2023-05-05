import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckCircleElement } from '@aracna/icons-feather-web/elements/check-circle-element.js'

export const IconFeatherCheckCircle: ElementComponent<IconFeatherCheckCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherCheckCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check-circle', IconFeatherCheckCircleElement)
