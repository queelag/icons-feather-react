import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLink2Element } from '@aracna/icons-feather-web/elements/link-2-element'

export const IconFeatherLink2: ElementComponent<IconFeatherLink2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLink2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-link-2', IconFeatherLink2Element)
