import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherServerElement } from '@aracna/icons-feather-web/elements/server-element.js'

export const IconFeatherServer: ElementComponent<IconFeatherServerElement, IconProps> = createBaseElementComponent<
  IconFeatherServerElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-server', IconFeatherServerElement)
