import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSkipBackElement } from '@aracna/icons-feather-web/elements/skip-back-element'

export const IconFeatherSkipBack: ElementComponent<IconFeatherSkipBackElement, IconProps> = createBaseElementComponent<
  IconFeatherSkipBackElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-skip-back', IconFeatherSkipBackElement)
