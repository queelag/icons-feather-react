import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherServerElement } from '@aracna/icons-feather-web/elements/server-element'

export const IconFeatherServer: ElementComponent<IconFeatherServerElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherServerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-server', IconFeatherServerElement)
