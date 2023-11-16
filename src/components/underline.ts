import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUnderlineElement } from '@aracna/icons-feather-web/elements/underline-element'

export const IconFeatherUnderline: ElementComponent<IconFeatherUnderlineElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUnderlineElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-underline', IconFeatherUnderlineElement)
