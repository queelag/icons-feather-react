import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCheckCircleElement } from '@aracna/icons-feather-web/elements/check-circle-element'

export const IconFeatherCheckCircle: ElementComponent<IconFeatherCheckCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCheckCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-check-circle', IconFeatherCheckCircleElement)
