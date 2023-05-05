import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArchiveElement } from '@aracna/icons-feather-web/elements/archive-element.js'

export const IconFeatherArchive: ElementComponent<IconFeatherArchiveElement, IconProps> = createBaseElementComponent<
  IconFeatherArchiveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-archive', IconFeatherArchiveElement)
