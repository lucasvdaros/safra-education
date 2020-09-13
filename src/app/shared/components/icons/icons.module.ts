import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

import {
  ChevronRight, Inbox, User, UserPlus, Users, TrendingUp, Settings,
  LogOut, Plus, Search, Trash, Edit, ArrowLeft, Save, DownloadCloud,
  MessageCircle, Volume2, VolumeX, X, Menu, HelpCircle, Move, Home,
  Calendar, Image, Film, FileText, Info, Send, Tv, Tag
} from 'angular-feather/icons';

const icons  = {
  ChevronRight,
  Inbox,
  User,
  UserPlus,
  Users,
  TrendingUp,
  Settings,
  LogOut,
  Plus,
  Search,
  Trash,
  Edit,
  ArrowLeft,
  MessageCircle,
  Volume2,
  VolumeX,
  X,
  Menu,
  HelpCircle,
  Move,
  Save,
  DownloadCloud,
  Home,
  Calendar,
  Image,
  Film,
  FileText,
  Info,
  Send,
  Tv,
  Tag
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
      FeatherModule
  ]
})
export class IconsModule { }
