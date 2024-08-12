import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCheckCircleElement } from '@aracna/icons-feather-web/elements/check-circle-element'

export const IconFeatherCheckCircle: ElementComponent<IconFeatherCheckCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-check-circle', IconFeatherCheckCircleElement)
