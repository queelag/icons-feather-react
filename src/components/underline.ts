import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUnderlineElement } from '@aracna/icons-feather-web/elements/underline-element'

export const IconFeatherUnderline: ElementComponent<IconFeatherUnderlineElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUnderlineElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-underline', IconFeatherUnderlineElement)
