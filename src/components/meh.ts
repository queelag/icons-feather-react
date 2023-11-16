import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMehElement } from '@aracna/icons-feather-web/elements/meh-element'

export const IconFeatherMeh: ElementComponent<IconFeatherMehElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMehElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-meh', IconFeatherMehElement)
