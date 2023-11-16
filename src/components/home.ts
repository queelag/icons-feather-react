import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHomeElement } from '@aracna/icons-feather-web/elements/home-element'

export const IconFeatherHome: ElementComponent<IconFeatherHomeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHomeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-home', IconFeatherHomeElement)
